To run the code base use 
- npm i
- npm start

System Design:

-> Discuss functional and non functional requirements
-> Draw the components (wireframes)
-> Discuss about reuasable components
-> Discuss about optimizations like caching, code spliting, lazy loading etc
-> including responsive design, internationalization (i18n), and accessibility best practices.

1) Added Auto complete search results, url:  http://localhost:3000/autosearch

Featuring:

-> Debouncing
-> focus and blur
-> key arrow down, up enter
-> caching
-> can add loader/error handling if api failes. currently its "No results found"

Api used to fetch the results: https://dummyjson.com/docs/recipes#recipes-search

================================================================================

2) Added Tab Form, url:  http://localhost:3000/tabForm

Featuring:

-> Validations(ask what all validation should be added)
-> Navigation keeping data persistant
-> Error handle messages
-> Next, previous buttons added

================================================================================

3) Progress Bar, url:  http://localhost:3000/progressBar

Featuring:

-> Animation

================================================================================

4) Accordion, url: http://localhost:3000/accordion

Question and requirements:

https://www.youtube.com/watch?v=88R1pOvvFjg&list=PLlasXeu85E9cciv04MYWscodnbRFqACsH&index=10

https://namastedev.com/practice/accordion

================================================================================

5) TodoList, url: http://localhost:3000/todoList

Question and requirements:

https://www.youtube.com/watch?v=DdX-nTv_VYo&list=PLlasXeu85E9cciv04MYWscodnbRFqACsH&index=9

https://namastedev.com/practice/todo-list

================================================================================

6) Pagination, url: http://localhost:3000/pagination

Question and requirements:

https://www.youtube.com/watch?v=J-QIayOSDN8&list=PLlasXeu85E9cciv04MYWscodnbRFqACsH&index=2&pp=iAQB

https://namastedev.com/practice/pagination

================================================================================

6) OTP Input, url: http://localhost:3000/pagination

Question and requirements:

https://www.youtube.com/watch?v=usVdJONI99k&list=PLlasXeu85E9cciv04MYWscodnbRFqACsH&index=6

https://namastedev.com/practice/otp-input-component

================================================================================

Consist of Javascript concepts: IN JavaScript folder

================================================================================

6) OTP Input, url: http://localhost:3000/modal

Question and requirements:

https://www.youtube.com/watch?v=Ii4AcwLHgEA

linear forwards; //forwards ensure after animation element css remains original one

================================================================================

7) Drag Drop, url: http://localhost:3000/dragDrop

https://www.youtube.com/watch?v=la2QrsXAEu4

Rules for drag and drop

1) By default elements cant be dragged. We have to explicitely tell browser that we have to drag a element. (security purpose) [draggable = true]

2) Similarly drop also explicitely have to tell browser.

3) Even though both are enabled, browser still blocks the drop event. [dragover(should use e.preventDefault, stop default mechanisim of browser ) use not just drop]
----------------------------------------------------------------------------------------
=> Events when we are dragging source elements:

dragStart -> drag -> dragEnd

dragStart-> fired once

drag-> fired continously

dragEnd-> fired once when drop completes or get cancelled (stoped dragging)
----------------------------------------------------------------------------------------
=> Events when we are dropping source elements:

dragEnter-> dragOver -> dragLeave -> drop

dragEnter -> teddy enter basket zone (like in css we can change background saying valid target etc)

dragOver -> fired continously like if when teddy you keep moving inside basket

dragLeave -> fired once. left the basket ie target

=========================================

INFINITE SCROLL

          ↑ Page above (scrolled past)
────────────────────────────────────────
[ Item 1 ]
[ Item 2 ]
[ Item 3 ]
[ Item 4 ]
[ Item 5 ]   ← Currently visible (inside viewport)
────────────────────────────────────────
[ Item 6 ]   ← This is the "last item" we are observing
              (currently below viewport)
────────────────────────────────────────
          ↓ Page continues...

viewport height (window.innerHeight) = 768px

getBoundingClientRect().bottom of Item 6 = 1200px  (because it's lower down the page)