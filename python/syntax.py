## - Attributes/Variables ##
# Intergers - Whole Numbers
int1 = 2
int2 = -36
int3 = 678

print(int1, int2, int3)

# Floating Point - Numbers with a decimal place
float1 = 0.76
float2 = 7.65
float3 = 28.0

print(float1, float2, float3)

# Strings - Ordered sequence of characters,
str1 = 'This is a string' # Indicated by single quotes ('')
str2 = "8736457" # or double quotes ("")
str3 = "'This is also a string'" # <-- In this sequence, the inner single quotes ('') are part of the string

print(str1, str2, str3)

# Booleans - Logical value that is either true or false (binary)
bool1 = (2 == 2) #should return True
bool2 = ('8' == 8) #should return False - in JavaScript, this would return True
bool3 = (3 > 9) #should return False

print(bool1, bool2, bool3)

# Lists - Ordered sequence of items, can be mixed types - similar to an Array
list1 = [1,2,3]
list2 = [45, 'apple', True, 5.72]

print(list1, list2)

# Lists can also contain other Lists
megalist = [list1, list2, bool2, str2]

print(megalist)

# Dictionaries - Unordered mappings for storing objects without knowing the index using key/value pairs - Similar to an Object
dict1 = {'name1':'Kiado', 'name2':'Rickard', 'name3':'Frenniz'}

print(dict1)
print(dict1['name3'], dict1['name1'], dict1['name2'])

# Dictionaries can contain lists, or other Dictionaries
dict2 = {'dictionary':dict1, 'list':list1}

print(dict2)

# Lists can also contain Dictionaries
list4 = [dict1, list1, bool3]

print(list4)

# There are no 'undefined' variables in Python. You can, however, set them to None
no_def = None

print(no_def)

# Tuples - Similar to lists (ordered sequence), but the objects inside are immutable (cannot be reassigned)
# Tuples use paranthases

tup1 = (3,5,7)
tup2 = ('f', 'k', 'c')

print(tup1, tup2)
print(tup1[2], tup2[0])

# Tuples can also contain Lists, Dictionaries, and other tuples.
tup3 = (list1, tup2, dict1)

print(tup3)

# Likewise, Lists and Dictionaries can contain Tuples
list5 = [tup1, tup2]
dict5 = {'tuple1': tup1, 'tuple2': tup2}

print(list5)
print(dict5)

#Sets - unordered collections of unique elements
objlist = [3,5,6,3,7,3,6,7,6,3]

print(set(objlist))

## - Sample If/Elif/Else - ##
