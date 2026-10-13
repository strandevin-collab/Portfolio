import React, { createContext, useContext, useState, useMemo } from 'react'
import portfolioData from '../data/portfolioData.json'

const PortfolioContext = createContext(null)

export function PortfolioProvider({ children }) {
  // Navigation levels: 1 = Hub, 2 = Sub-Items Grid, 3 = Detail Modal open
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [selectedItemId, setSelectedItemId] = useState(null)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  // Computed state
  const selectedCategory = useMemo(() => {
    if (!selectedCategoryId) return null
    return portfolioData.categories.find(c => c.id === selectedCategoryId) || null
  }, [selectedCategoryId])

  const selectedItem = useMemo(() => {
    if (!selectedItemId) return null
    return portfolioData.items.find(item => item.id === selectedItemId) || null
  }, [selectedItemId])

  const categoryItems = useMemo(() => {
    if (!selectedCategoryId) return []
    return portfolioData.items.filter(item => item.categoryId === selectedCategoryId)
  }, [selectedCategoryId])

  const activeLevel = useMemo(() => {
    if (selectedItemId) return 3
    if (selectedCategoryId) return 2
    return 1
  }, [selectedCategoryId, selectedItemId])

  // Navigation handlers
  const goToCategory = (categoryId) => {
    document.body.style.overflow = 'unset'
    setSelectedCategoryId(categoryId)
    setSelectedItemId(null)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const goToItem = (itemId) => {
    const item = portfolioData.items.find(i => i.id === itemId)
    if (item && !selectedCategoryId) {
      setSelectedCategoryId(item.categoryId)
    }
    setSelectedItemId(itemId)
  }

  const closeItemModal = () => {
    setSelectedItemId(null)
    document.body.style.overflow = 'unset'
  }

  const goBackToHub = () => {
    document.body.style.overflow = 'unset'
    setSelectedItemId(null)
    setSelectedCategoryId(null)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const currentItemIndex = useMemo(() => {
    if (!selectedItemId || !categoryItems.length) return -1
    return categoryItems.findIndex(i => i.id === selectedItemId)
  }, [selectedItemId, categoryItems])

  const nextItem = useMemo(() => {
    if (currentItemIndex === -1 || categoryItems.length <= 1) return null
    return categoryItems[(currentItemIndex + 1) % categoryItems.length]
  }, [currentItemIndex, categoryItems])

  const prevItem = useMemo(() => {
    if (currentItemIndex === -1 || categoryItems.length <= 1) return null
    return categoryItems[(currentItemIndex - 1 + categoryItems.length) % categoryItems.length]
  }, [currentItemIndex, categoryItems])

  const goToNextItem = () => {
    if (nextItem) setSelectedItemId(nextItem.id)
  }

  const goToPrevItem = () => {
    if (prevItem) setSelectedItemId(prevItem.id)
  }

  // Category sequencing
  const currentCategoryIndex = useMemo(() => {
    if (!selectedCategoryId) return -1
    return portfolioData.categories.findIndex(c => c.id === selectedCategoryId)
  }, [selectedCategoryId])

  const nextCategory = useMemo(() => {
    if (currentCategoryIndex === -1) return null
    return portfolioData.categories[(currentCategoryIndex + 1) % portfolioData.categories.length]
  }, [currentCategoryIndex])

  const prevCategory = useMemo(() => {
    if (currentCategoryIndex === -1) return null
    return portfolioData.categories[(currentCategoryIndex - 1 + portfolioData.categories.length) % portfolioData.categories.length]
  }, [currentCategoryIndex])

  const goToNextCategory = () => {
    if (nextCategory) goToCategory(nextCategory.id)
  }

  const goToPrevCategory = () => {
    if (prevCategory) goToCategory(prevCategory.id)
  }

  const value = {
    data: portfolioData,
    profile: portfolioData.profile,
    categories: portfolioData.categories,
    items: portfolioData.items,
    activeLevel,
    selectedCategoryId,
    selectedCategory,
    selectedItemId,
    selectedItem,
    categoryItems,
    currentItemIndex,
    nextItem,
    prevItem,
    goToNextItem,
    goToPrevItem,
    nextCategory,
    prevCategory,
    goToNextCategory,
    goToPrevCategory,
    goToCategory,
    goToItem,
    closeItemModal,
    goBackToHub,
    contactModalOpen,
    setContactModalOpen
  }

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider')
  }
  return context
}
