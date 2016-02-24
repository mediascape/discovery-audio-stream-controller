This application was written as part of the MediaScape EU project, to demonstrate some 
of the project's capabilities.

To install it as a simple demonstration, do the following:

## Install and run the example radio app and chrome extensions.

Clone each of the repositories.

    git clone https://github.com/mediascape/discovery-extension
    git clone https://github.com/mediascape/discovery-helper-app
    git clone https://github.com/mediascape/discovery-bbc-radio

Go to chrome://extensions in your Chrome browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:  The menu's icon is three horizontal bars. Then select Extensions under the Tools menu to get to the same place).

Ensure that the Developer mode checkbox in the top right-hand corner is checked.

<img src="doc/img/image00.png" width="400px" />

Click “Load unpacked extension...” to pop up a file-selection dialog.

Navigate to the directory in which your extension files live, and select it. Do this for all three.

<img src="doc/img/image02.png  width="400px" "/>

Click “launch” on MediaScape Discovery Helper

<img src="doc/img/image05.png"  width="400px" />

## Install the "Radiodan" and run control interface app and audio server

This is an example application that responds to `_mediascape-http._tcp.local` and plays streams of audio.
On a machine on the same network, install the prerequisites.

On OS X:

    brew install zmq mpd nodejs

On raspbian/debian/ubuntu:

    apt-get install mpd libzmq3 libzmq3-dev nodejs

And then on all platforms:

    git clone https://github.com/mediascape/discovery-audio-stream-controller
    cd discovery-audio-stream-controller/
    cp config/radiodan-config.json.example config/radiodan-config.json
    npm install
    npm start

## Running

And after a few moments you should see the MDNS discovery update in the toolbar of the Chrome browser:

<img src="doc/img/image01.png"/>

Clicking on the name of the device takes you to a remote control page: 

<img src="doc/img/image03.png"  width="400px" />

which you can then use as a web-based remote control to control the audio coming through mpd on your computer:

<img src="doc/img/image04.png"  width="400px" />


