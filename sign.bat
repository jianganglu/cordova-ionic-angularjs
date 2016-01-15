if not exist platforms\android\build\outputs\apk\android.keystore {
    copy android.keystore platforms\android\build\outputs\apk\android.keystore
}
    

cd platforms/android/build/outputs/apk

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore android.keystore android-release-unsigned.apk maycur

:: -------------------------
cd ../

start /max "" apk

cd ../../../../