#include <iostream>
#include <string>

bool isSubsequence(std::string s, std::string t) {
    int j = 0;
    for (int i = 0; i < t.size() && j < s.size(); i++)
        if (s[j] == t[i])
            j++;
    return j == s.size();
}

int main() {
    std::string s, t;
    std::cout << "Enter first string: ";
    std::cin >> s;
    std::cout << "Enter second string: ";
    std::cin >> t;
    if (isSubsequence(s, t))
        std::cout << "First string is a subsequence of the second string.\n";
    else
        std::cout << "First string is not a subsequence of the second string.\n";
    return 0;
}