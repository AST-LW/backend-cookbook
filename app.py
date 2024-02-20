import os
from dotenv import find_dotenv, load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from middlewares.hello_world_middleware import hello_world_middleware
from routers import hello_world


load_dotenv(find_dotenv())

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.middleware("http")(hello_world_middleware)


app.include_router(hello_world.router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", port=int(os.getenv("PORT")),
                host="0.0.0.0", reload=True)
