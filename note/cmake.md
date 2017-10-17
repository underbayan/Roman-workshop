####cMake 详解

````CMake
cmake_minimum_required(VERSION 2.6)
project(projectParentFolderName)
add_executable(exeName *.cpp)
target_link_libraries(exeName libNamelist)
install(Target exeName DSTINATION pathName)
set(variableName value)
configure_file(inputFilename outputFilename)
````