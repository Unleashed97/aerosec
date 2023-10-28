export const handleBurger = () => {
    const headerInner = document.querySelector('.header__inner')
    const burger = document.querySelector('.burger')

    if (burger && headerInner) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active')
            headerInner.classList.toggle('active')
        })

        window.addEventListener('resize', (e) => {
            // while resize if width more than md css var
            if (e.target.outerWidth > 768) {
                burger.classList.remove('active')
                headerInner.classList.remove('active')
            }
        })
    }
}

export const handleAccordion = () => {
    const accordionBtns = document.querySelectorAll('.accordion__item-btn')

    accordionBtns.forEach((btn) =>
        btn.addEventListener('click', () => {
            const targetCollapseBlockId = btn.getAttribute('data-target')

            const accordionCollapseBlock = document.querySelector(
                `${targetCollapseBlockId}`,
            )

            accordionCollapseBlock.classList.toggle('active')
            btn.classList.toggle('active')
        }),
    )
}

export const handlePaginationProject = () => {
    const content = document.querySelector(
        '.section--projects .section__content',
    )

    if (content) {
        const itemsPerPage = 12 // set number of items per page
        let currentPage = 0
        const items = Array.from(
            content.querySelectorAll('.card--project'),
        ).slice(0)

        const totalPages = Math.ceil(items.length / itemsPerPage)

        function showPage(page) {
            const startIndex = page * itemsPerPage
            const endIndex = startIndex + itemsPerPage
            items.forEach((item, index) => {
                item.classList.toggle(
                    'hidden',
                    index < startIndex || index >= endIndex,
                )
            })
            updateActiveButtonStates()
        }

        function createPageButtons() {
            const paginationContainer = document.querySelector(
                '.pagination--projects .pagination__pages',
            )

            // Add page buttons
            for (let i = 0; i < totalPages; i++) {
                const pageButton = document.createElement('button')
                pageButton.textContent = i + 1
                pageButton.addEventListener('click', () => {
                    currentPage = i
                    showPage(currentPage)
                    updateActiveButtonStates()
                })

                paginationContainer.appendChild(pageButton)
            }
        }

        function arrowBtnsProject() {
            const paginationContainer = document.querySelector(
                '.pagination--projects',
            )
            const prevPage = paginationContainer.querySelector('.prev-page')
            const nextPage = paginationContainer.querySelector('.next-page')

            prevPage.addEventListener('click', () => {
                if (currentPage > 0) {
                    --currentPage
                    showPage(currentPage)
                    updateActiveButtonStates()
                }
            })
            nextPage.addEventListener('click', () => {
                if (currentPage < totalPages - 1) {
                    ++currentPage
                    showPage(currentPage)
                    updateActiveButtonStates()
                }
            })
        }
        arrowBtnsProject()

        function updateActiveButtonStates() {
            const pageButtons = document.querySelectorAll(
                '.pagination--projects .pagination__pages button',
            )
            pageButtons.forEach((button, index) => {
                if (index === currentPage) {
                    button.classList.add('active')
                } else {
                    button.classList.remove('active')
                }
            })
        }

        createPageButtons() // Call this function to create the page buttons initially
        showPage(currentPage)
    }
}
export const handlePaginationLicense = () => {
    const content = document.querySelector(
        '.section--licenses .section__content',
    )

    if (content) {
        const itemsPerPage = 4 // set number of items per page
        let currentPage = 0
        const items = Array.from(content.querySelectorAll('.card--cert')).slice(
            0,
        )
        const totalPages = Math.ceil(items.length / itemsPerPage)

        function showPage(page) {
            const startIndex = page * itemsPerPage
            const endIndex = startIndex + itemsPerPage
            items.forEach((item, index) => {
                item.classList.toggle(
                    'hidden',
                    index < startIndex || index >= endIndex,
                )
            })
            updateActiveButtonStates()
        }

        function createPageButtons() {
            const paginationContainer = document.querySelector(
                '.section--licenses .pagination__pages',
            )

            // Add page buttons
            for (let i = 0; i < totalPages; i++) {
                const pageButton = document.createElement('button')
                pageButton.textContent = i + 1
                pageButton.addEventListener('click', () => {
                    currentPage = i
                    showPage(currentPage)
                    updateActiveButtonStates()
                })

                paginationContainer.appendChild(pageButton)
            }
        }

        function arrowBtnsLicenses() {
            const paginationContainer = document.querySelector(
                '.pagination--licenses',
            )
            const prevPage = paginationContainer.querySelector('.prev-page')
            const nextPage = paginationContainer.querySelector('.next-page')

            prevPage.addEventListener('click', () => {
                if (currentPage > 0) {
                    --currentPage
                    showPage(currentPage)
                    updateActiveButtonStates()
                }
            })
            nextPage.addEventListener('click', () => {
                if (currentPage < totalPages - 1) {
                    ++currentPage
                    showPage(currentPage)
                    updateActiveButtonStates()
                }
            })
        }
        arrowBtnsLicenses()

        function updateActiveButtonStates() {
            const pageButtons = document.querySelectorAll(
                '.pagination--licenses .pagination__pages button',
            )
            pageButtons.forEach((button, index) => {
                if (index === currentPage) {
                    button.classList.add('active')
                } else {
                    button.classList.remove('active')
                }
            })
        }

        createPageButtons() // Call this function to create the page buttons initially
        showPage(currentPage)
    }
}
