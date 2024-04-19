read
code --list-extensions > extensions.list

code --list-extensions | % { "code --install-extension $_" }


tsrafce