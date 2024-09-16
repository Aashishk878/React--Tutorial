#include <bits/stdc++.h>
using namespace std;

/**
*LOGIC:


*/
int main(){
    int arr[] = {1,2,3,4,5,6,7,8,9,9};
    int n = sizeof(arr) / sizeof(arr[0]);
    int sum = 0;
    int diff = 0;
    for(int idx = 0; idx < n; idx++)
    {
        sum+=arr[idx];
        
    }

    cout<<sum;
    for(int idx = 0; idx < n; idx++)
    {
        diff-=arr[idx];
        
    }

    recursion => element => pick; not pick; xyz
    2^n
    
    

    return 0;
}
