# Production code
def fizzBuzz(value):
    if isMultiple( value, 3 ):
        if isMultiple ( value, 5 ):
            return "FizzBuzz"
        return "Fizz"
    if isMultiple( value, 5 ):
        return "Buzz"
    return str(value)

def isMultiple( value, mod ):
    return ( value % mod ) == 0

# Unit Test
def checkFizzBuzz( value, expectedRetVal ):
    retVal = fizzBuzz(value)
    assert retVal == expectedRetVal

def test_returns1When1PassedIn():
    checkFizzBuzz( 1, '1' )

def test_returns2When2PassedIn():
    checkFizzBuzz( 2, '2' )

def test_returnsFizzWhen3PassedIn():
    checkFizzBuzz( 3, 'Fizz' )

def test_returnsBuzzWhen5PassedIn():
    checkFizzBuzz( 5, 'Buzz' )

def test_returnsFizzWhen6PassedIn():
    checkFizzBuzz( 6, 'Fizz' )

def test_returnsBuzzWhen10PassedIn():
    checkFizzBuzz( 10, 'Buzz' )

def test_returnsFizzBuzzWhen15PassedIn():
    checkFizzBuzz( 15, 'FizzBuzz' )
