#include<iostream>
#include<algorithm>
using namespace std;

int compare(string str1, string str2){
   if(str1.length() < str2.length())
   return 1;
   return 0;
}
int main(){

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
    if(ans =="Yes" ){
        sort(words_list, words_list + n, compare);
        string words_list_string;

        for(int i = n-1; i>=0> 0 ; i--){
            //std::string s = t;
            //std::string delimiter = words_list[i];
            words_list_string.append(words_list[i]);
            size_t pos = 0;
            std::string token;
            string tokenString;
            while ((pos = t.find(words_list[i])) != std::string::npos) {
                token = t.substr(0, pos);
                // std::cout <<"taken: " << token << std::endl;
                tokenString.append(token);
                //std::cout <<"t: " << tokenString << std::endl;
                t.erase(0, pos + words_list[i].length());
            }
            tokenString.append(t);
            //std::cout <<"t: "<< tokenString<<endl;
            t = tokenString;
        }
        if(t.length() > 0 ){
           if (words_list_string.find(t) == string::npos) {
                ans = "No";
            }
        }
    }


     cout << ans;

 return 0;

}
