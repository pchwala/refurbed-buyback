import os
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

from app.order import Order

DEBUG_REF_KEY = os.environ.get("REF_KEY")

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Order API"}

@app.post("/buyback-orders")
def list_buyback_orders(request: Request):
    ref_key = request.headers.get("X-API-KEY")
    if not ref_key:
        ref_key = DEBUG_REF_KEY
        if not ref_key:
            return JSONResponse(status_code=401, content={"error": "Missing X-API-KEY header and REF.KEY environment variable."})
    api_key = ref_key
    order = Order(api_key)
    result = order.ListBuybackOrders()
    return JSONResponse(content=result)
