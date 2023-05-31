
``` lang=javascript
variance=std(data)
data=(data-mean(data))/std(data)
arrange time==> time
wave ,period ,scale ,coi = wavelet(sst,dt,pad,dj,s0 ,j1,mother)
```

wavelet tree
 a data structure 
 a balanced binary tree 
 for text indexes, discrete grids
 answer some queries like following :
    access(S,i), return S[i]
    rank-a(S,i) returns the number of a in S[1,i]
    select-a(S,j) return s the position in S of j-th a

link:
https://www.dcc.uchile.cl/~gnavarro/ps/spire12.4.pdf