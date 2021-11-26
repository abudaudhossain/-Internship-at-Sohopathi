#include<bits/stdc++.h>
#include <iostream>
#include <iomanip>
using namespace std;


int main()
{
  float p, t, a, q, n,incress_people_per_year;

    cin >> p>> t >> a >> q;

    for( n = 0; p <= q; n ++){
        incress_people_per_year = (t/100*p);
        p = ceil(p + a + incress_people_per_year);
    }
     cout << n;
    return 0;
}
