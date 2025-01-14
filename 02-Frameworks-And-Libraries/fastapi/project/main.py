from fastapi import FastAPI
from fastapi.params import Body

app = FastAPI()


@app.get("/")  # In fastapi, routes are known as path operations
async def root():
    return {"message": "Hello World!"}


@app.post("/")
async def post(body: dict = Body(...)):
    print(body)
    return {"message": "Success"}
