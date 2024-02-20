from fastapi import status, APIRouter
from pydantic import BaseModel


class HelloWorldResponseModel(BaseModel):
    message: str = ""


router = APIRouter(
    prefix="/api",
    tags=["hello_world"]
)


@router.get("/hello-world", status_code=status.HTTP_200_OK, response_model=HelloWorldResponseModel)
async def hello_world():
    return {
        "message": "Hello World!!"
    }
