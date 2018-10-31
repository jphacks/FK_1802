# HyPre(ハイプレ)
[![HyPre](https://github.com/jphacks/FK_1802/blob/master/app/images/icon_black.png)](https://www.youtube.com/watch?v=WoR2oniQ444&feature=youtu.be)
## 製品概要
### FinTech(Finger Tech)

### 背景（製品開発のきっかけ、課題等）
- かっこいいプレゼンをしたい。
- そもそも、プレゼン中にキーボードを打つのはダサい。  
 -> 指パッチンなどの音声でスライドを操作できたらかっこいい！

### 製品説明（具体的な製品の説明）
キーボードやデバイスを触れることなく、指パッチンやゴング、ベルの音でプレゼンテーションアプリに対してページ送りなどの操作を行うことが出来る。
音の認識には深層学習を用いており、高い精度で音の認識を行える。

### 特長

#### 1. 指パッチンなどの音からプレゼンを操作できる。

#### 2. 音に対応する操作を割り当てることが出来る。

#### 3. デスクトップアプリでタブからon/offの切り替えを素早く行える。

### 解決出来ること
プレゼンをかっこよく行える。

### 今後の展望
識別できる音を増やし、プレゼンテーションアプリに対して行える操作を増やす。

## 開発内容・開発技術
### 活用した技術
#### フレームワーク・ライブラリ・モジュール
* Electron
* Python
  * TensorFlow
  * Keras
  * librosa
  * numpy
#### デバイス
* macOS

### 研究内容・事前開発プロダクト（任意）
ご自身やチームの研究内容や、事前に持ち込みをしたプロダクトがある場合は、こちらに実績なども含め記載をして下さい。

*
*

### 独自開発技術（Hack Dayで開発したもの）
#### 2日間に開発した独自の機能・技術
##### 注力した点
* [モナドを利用したDeep Learningモデル構築](https://github.com/jphacks/FK_1802/blob/master/pyproc/models.py)
* [Kerasモナド](https://github.com/jphacks/FK_1802/blob/master/pyproc/keras_monad.py)
* [メタプロを利用したコンフィグ管理](https://github.com/jphacks/FK_1802/blob/master/pyproc/config/__init__.py)

##### 行ったこと
* この二日間で音を認識するためのモデルの構築から学習まで行った。
