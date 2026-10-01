// QA release build 9
plugins {
    id("com.android.application")
}

android {
    namespace = "io.github.amidavid.tefb2coach"
    compileSdk = 35

    defaultConfig {
        applicationId = "io.github.amidavid.tefb2coach"
        minSdk = 26
        targetSdk = 35
        versionCode = 5
        versionName = "1.4"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }
}

dependencies {
    implementation("androidx.activity:activity:1.10.1")
    implementation("androidx.core:core:1.15.0")
}
