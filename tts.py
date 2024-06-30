import pyttsx3

# Initialize text-to-speech engine
engine = pyttsx3.init()

# Define the text
text = "Hallo, ich werde Ihnen helfen."

# Save the speech to a file
output_file = "/mnt/data/hallo_ich_werde_ihnen_helfen.mp3"
engine.save_to_file(text, output_file)
engine.runAndWait()

output_file