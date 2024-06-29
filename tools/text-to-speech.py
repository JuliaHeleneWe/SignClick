# Import the required module for text 
# to speech conversion
from gtts import gTTS

# This module is imported so that we can 
# play the converted audio
import os

mytexts = {
    '1.mp3':'Hallo, kann ich Ihnen helfen?',
    '2.mp3':'Ich werde Sie jetzt untersuchen.',
    '3.mp3':'Haben Sie Schmerzen?',
    '4.mp3':'Ich werde einen Krankenwagen rufen.',
    '5.mp3':'Der Rettungssanitäter ist auf halbem Weg.',
    '6.mp3':'Ich bleibe hier.',
    '7.mp3':'Du bist nicht allein.'
}

# The text that you want to convert to audio
#mytext = 'Welcome to geeksforgeeks Joe!'

# Language in which you want to convert
language = 'de'

for myfile, mytext in mytexts.items():
    # Passing the text and language to the engine, 
    # here we have marked slow=False. Which tells 
    # the module that the converted audio should 
    # have a high speed
    myobj = gTTS(text=mytext, lang=language, slow=False)

    # Saving the converted audio in a mp3 file named
    # welcome 
    myobj.save(myfile)