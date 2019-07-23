import pytest

# Production code
class Checkout:
    class Discounts:
        def __init__(self, nbrItems, price):
            self.nbrItems = nbrItems
            self.price = price

    def __init__(self):
        self.prices = {}
        self.discounts = {}
        self.items = {}

    def addDiscount(self, item, nbrOfItems, price):
        discount = self.Discounts(nbrOfItems, price)
        self.discounts[item] = discount

    def addItemPrice(self, item, price):
        self.prices[item] = price

    def addItem(self, item):
        if item in self.items:
            self.items[item] += 1
        else:
            self.items[item] = 1

    def calculateTotal(self):
        total = 0
        for item, cnt in self.items.items():
            if item in self.discounts:
                discount = self.discounts[item]
                if cnt >= discount.nbrItems:
                    nbrOfDiscounts = cnt/discount.nbrItems
                    total += nbrOfDiscounts * discount.price
                    remaining = cnt % discount.nbrItems
                    total += remaining * self.prices[item]
                else:
                    total += self.prices[item] * cnt
            else:
                total += self.prices[item] * cnt
        return total

# Unit Test
@pytest.fixture()
def checkout():
    checkout = Checkout()
    checkout.addItemPrice( 'a', 1 )
    checkout.addItemPrice( 'b', 2 )
    return checkout

def test_canCalculateTotal(checkout):
    checkout.addItem( 'a' )
    assert checkout.calculateTotal() == 1

def test_canGetCorrectTotalWithMultipleItems(checkout):
    checkout.addItem( 'a' )
    checkout.addItem( 'b' )
    assert checkout.calculateTotal() == 3

def test_canAddDiscountRule(checkout):
    checkout.addDiscount( 'a', 3, 2 )

def test_canApplyDiscountRule(checkout):
    checkout.addDiscount( 'a', 3, 2 )
    checkout.addItem( 'a' )
    checkout.addItem( 'a' )
    checkout.addItem( 'a' )
    assert checkout.calculateTotal() == 2
