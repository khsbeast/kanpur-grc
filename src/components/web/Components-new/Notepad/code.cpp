#include<bits/stdc++.h>

using namespace std; 

int main() {
    /*int d,m;
    int n;
    cin >> n;
    int a[n];
    for(int i = 0;i < n;i++)
    {
        cin >> a[i];
    }
    cin >> d >> m;
    int sum = 0;
    for(int k = 0;k < n;k++){
    for(int i = k;i < n;i++)
    {
        sum = 0;
        for(int j = i;j < i+m && i+m <= n;j++)
        {
            sum += a[j];
            
        }
        cout << sum << ' ';
    }
}*/
int n;
cin >> n;
int a[5]={0};
int o;
for(int i = 0;i < n-1;i++)
{
    cin >> o;
    a[o]++;
}
int maxx = 0;
int index;
for(int i = 0;i < 5;i++)
{
    if(a[i] > maxx)
    {
        maxx = a[i];
        index = i;
    }
}
cout << index << endl;
}