echo 'TIR Installer started'
echo 'Installing System Requirements'
sudo apt-get install -y curl
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get update
sudo apt-get install -y nodejs git build-essential imagemagick libfontconfig-dev
echo 'Installing Font Packages'
sudo apt-get install -y fonts-cantarell lmodern ttf-aenigma ttf-georgewilliams ttf-bitstream-vera ttf-sjfonts ttf-tuffy tv-fonts
echo 'Cloning Source Code into /opt/tir'
cd /opt
sudo mkdir -p /opt/tir
sudo chmod 755 tir
cd tir
git clone https://github.com/WebDaD/tir.git .
echo 'Deploying App'
sudo npm run deploy -s
