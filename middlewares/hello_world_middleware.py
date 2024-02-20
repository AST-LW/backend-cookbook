from fastapi import Request


async def hello_world_middleware(request: Request, call_next):
    print("Hello World Middleware!")
    response = await call_next(request)

    return response
