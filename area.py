# -*- coding: utf-8 -*-

'''
Escreva a sua solução aqui
Code your solution here
Escriba su solución aquí
'''

def somar(a,b):
    return a + b
    
def valores():
    a = int(input())
    b = int(input())
    return a, b
    
def exibe_soma(val):
    print(f"SOMA = {val}")
    
    
#fluxo principal
n1, n2 = valores()
resul = somar(n1,n2)
exibe_soma(resul)
