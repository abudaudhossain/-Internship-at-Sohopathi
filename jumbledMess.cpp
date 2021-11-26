#include<bits/stdc++.h>
#include <iostream>
using namespace std;


int main()
{
    int n;
    cin >> n;
    string t, words_list[n], ans;
    for(int i = 0; i < n; i++){
        cin >> words_list[i];
    }
    cin >> t;

    for( int i = 0; i < n; i++){
        if (t.find(words_list[i]) == string::npos) {
            ans = "No";
            break;
        }else{
            ans = "Yes";
        }

    }
     cout << ans;
    return 0;
}

