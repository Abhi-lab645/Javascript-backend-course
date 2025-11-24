# numbers=[1,2,3,4,5,6]

# num_sqr=list(map(lambda x:x**2,numbers))
# even_num=list(filter(lambda x:x%2==0,numbers))
# print(num_sqr)
# print(even_num)

# num=[-1,2,3,4,-5]
# def make_pos(n):
#     if n<0:
#         return n*-1
#     return n
# ls=list(map(make_pos,num))

# print(ls)

# name="Abhina"

# print(name[:len(name)//2])
# print(name[len(name)//2:])

# s1 = "apple"
# s2 = "banana"
# if s1 < s2:
#     print("apple is smaller")
# else:
#     print("banana is smaller")

n=input()

parity=[0 if int(d)%2==0 else 1 for d in n]

print(parity)
