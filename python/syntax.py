## - Attributes/Variables ##
print('# Intergers - Whole Numbers')
int1 = 2
int2 = -36
int3 = 678

print(int1, int2, int3)
print(' ')

print('# Floating Point - Numbers with a decimal place')
float1 = 0.76
float2 = 7.65
float3 = 28.0

print(float1, float2, float3)
print(' ')

print('# Strings - Ordered sequence of characters,')
str1 = 'This is a string' # Indicated by single quotes ('')
str2 = "8736457" # or double quotes ("")
str3 = "'This is also a string'" # <-- In this sequence, the inner single quotes ('') are part of the string

print(str1)
print(str2)
print(str3)
print(' ')

print('# Booleans - Logical value that is either true or false (binary)')
bool1 = (2 == 2) #should return True
bool2 = ('8' == 8) #should return False - in JavaScript, this would return True
bool3 = (3 > 9) #should return False

print(bool1, bool2, bool3)
print(" ")

print('# Lists - Ordered sequence of items, can be mixed types')
print('# Similar to an Array')
list1 = [1,2,3]
list2 = [45, 'apple', True, 5.72]

print(list1, list2)
print(" ")

print('# Lists can also contain other Lists')
megalist = [list1, list2, bool2, str2]

print(megalist)
print(" ")

print('# Dictionaries - Unordered mappings for storing objects without knowing the index using key/value pairs')
print('# Similar to an Object')
dict1 = {'name1':'Kiado', 'name2':'Rickard', 'name3':'Frenniz'}

print(dict1)
print(dict1['name3'], dict1['name1'], dict1['name2'])
print(" ")

print('# Dictionaries can contain lists, or other Dictionaries')
dict2 = {'dictionary':dict1, 'list':list1}

print(dict2)
print(" ")

print('# Lists can also contain Dictionaries')
list4 = [dict1, list1, bool3]

print(list4)
print(" ")

print('# There are no "undefined" variables in Python. They either exist, or they dont.')
print('# You can, however, set a variable to "None"')
no_def = None

print(no_def)
print(" ")

print('# Tuples - Similar to lists (ordered sequence), but the objects inside are immutable (cannot be reassigned)')
print('# Tuples use parentheses')
tup1 = (3,5,7)
tup2 = ('f', 'k', 'c')

print(tup1, tup2)
print(tup1[2], tup2[0])
print(" ")

print('# Tuples can also contain Lists, Dictionaries, and other tuples.')
tup3 = (list1, tup2, dict1)

print(tup3)
print(" ")

print('# Likewise, Lists and Dictionaries can contain Tuples')
list5 = [tup1, tup2]
dict5 = {'tuple1': tup1, 'tuple2': tup2}

print(list5)
print(dict5)
print(" ")

print('#Sets - unordered collections of unique elements')
objlist = [3,5,6,3,7,3,6,7,6,3]

print('Original: {}'.format(objlist))
print('Set: {}'.format(set(objlist)))
print(" ")

print('## - Sample If/Elif/Else - ##')
num1 = 7
num2 = 5

if num1 == num2:
    print('{} is equal to {}'.format(num1, num2))
elif num1 > num2:
    print('{} is greater that {}'.format(num1, num2))
else:
    print('{} is less than {}'.format(num1, num2))

num1 = 3
num2 = 8

if num1 == num2:
    print('{} is equal to {}'.format(num1, num2))
elif num1 > num2:
    print('{} is greater that {}'.format(num1, num2))
else:
    print('{} is less than {}'.format(num1, num2))

num1 = 3
num2 = 3

if num1 == num2:
    print('{} is equal to {}'.format(num1, num2))
elif num1 > num2:
    print('{} is greater that {}'.format(num1, num2))
else:
    print('{} is less than {}'.format(num1, num2))

print(" ")

print('## - For Loops - ##')
print('# For Loop with Numbers')
seq = [4,2,6,9,7,5]

for num in seq:
    total = num**2
    print("{} ^ 2 = {}".format(num, total))

print(" ")

print('#For Loop with Strings')
characters = ['Kiado', 'Rickard', 'Frenniz']
for char in characters:
    print(char)

print(" ")

print('# For Loop with Dictionaries')
races = {'Vahirga' : 'Obsidian Elf', 'Alixia' : 'Winged Elf', 'Edwin' : 'Human'}

for character in races:
    race = races[character]
    isVowel = False
    for vowel in 'aeiou':
        if race[0].lower() == vowel:
            isVowel = True

    if isVowel == True:
        print('{} is an {}'.format(character, race))
    else:
        print('{} is a {}'.format(character, race))

print(" ")

print('## - While Loops - ##')
i = 1

while i < 20: # <--- MAKE SURE TO CREATE A CONDITION THAT CAN/WILL BE MET!!! Otherwise the fuction will carry on infinitely
    print(f"i is currently: {i}")
    i = i+i # <--- i = i + i is not the same! Will create an infinite loop. Close the spaces between items or wrap in parentheses

## - funtions - Parameters and Returns - ##
