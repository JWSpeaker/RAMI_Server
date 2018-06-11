# RAMI_Server

#AWS
인스턴스 생성 후 간편히 접속할 수 있다
```
chmod 400 /pem_path/rami-server.pem
ssh -i "rami-server.pem" ubuntu@(Public domain)
```
pem은 키 페어 파일로 인스턴스에 접근하기 위해 반드시 필요한 파일이다. 최초 생성 후 다시 다운로드 할 수 없기 때문에 파일 관리를 잘 해야한다.

#nodejs 설치
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```