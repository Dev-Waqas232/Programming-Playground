from fastapi import FastAPI

app = FastAPI()

BOOKS = [
    {"title": "First Book", "author": "First Author",
        "content": "This Is My First Book", "category": "science"},
    {"title": "Second Book", "author": "Second Author",
        "content": "This Is My Second Book", "category": "math"},
    {"title": "Third Book", "author": "Third Author",
        "content": "This Is My Third Book", "category": "computer"},
    {"title": "Fourth Book", "author": "Fourth Author",
        "content": "This Is My Fourth Book", "category": "science"},
    {"title": "Fifth Book", "author": "Fifth Author",
        "content": "This Is My Fifth Book", "category": "math"},
]


@app.get("/")
def root():
    return {"message": "Hello World"}


@app.get("/books")
async def get_books(category: str | None = None):
    if category:
        books_category = []
        for book in BOOKS:
            if book.get("category").casefold() == category.casefold():
                books_category.append(book)
        return books_category
    return BOOKS


@app.get("/books/{book_id}")
async def get_book(book_id):
    for book in BOOKS:
        if book.get("title").casefold() == book_id.casefold():
            return book
