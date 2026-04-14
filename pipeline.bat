@echo off
setlocal

:: Ensure exactly one argument is passed
if "%~1"=="" (
    echo Usage: %~nx0 [ON^|OFF]
    exit /b 1
)

set "ARG=%~1"

:: Remove existing .github folder
if exist ".github" (
    echo Removing existing .github directory...
    rmdir /s /q ".github"
)

:: Check argument and perform copy
if /I "%ARG%"=="ON" (
    echo Enabling: copying from __tools__\enabled.github to .github
    xcopy /E /I /Q /Y "__tools__\enabled.github" ".github"
) else if /I "%ARG%"=="OFF" (
    echo Disabling: copying from __tools__\disabled.github to .github
    xcopy /E /I /Q /Y "__tools__\disabled.github" ".github"
) else (
    echo Invalid argument. Please use 'ON' or 'OFF'.
    exit /b 1
)

git add .github/
git commit -m "chore: pipeline %ARG%"

echo Operation complete.
endlocal
