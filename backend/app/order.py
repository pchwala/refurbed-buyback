import requests

class Order:
    def __init__(self, KEY):
        self.headers = {
            "Authorization": f"Plain {KEY}",
            "Content-Type": "application/json"
        }

    def ListBuybackOrders(self):
        url = "https://api.refurbed.com/refb.merchant.v1.BuybackOrderService/ListBuybackOrders"
        payload = {
            "sort": {
                "field": "id",
                "order": "DESC"
            }
        }
        response = requests.post(url, json=payload, headers=self.headers)
        return response.json()