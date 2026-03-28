roboworld.pl version that use React and Vite not redirected yet

To run go a life site go to this website hosted on whshost:

https://roboworld.react.marekaugustyn.whshost.com/

########################################################################################################S
Development:
npm run dev

########################################################################################################
If you wanna see this app on the other devices in local network then :
npm run dev -- --host

Access on this address:
not working
http://192.168.1.10:5173/


#########################################################################################################
Deployment:

I created new domain on my server whshost and created new react application using Vite.
I keep copy on the Git Hub – repository roboworld-react
Deploy:
https://vitejs.dev/guide/static-deploy

Open Visual Studio Code and use command: 
npm run build
Use Filezilla to copy files to the server
(utworzy albo doda nowe pliki do katalogu dist (na samej górze) przenieś pliki na „limescale” (whshost) serwer i wrzuć do katalogu roboworld.react  )



