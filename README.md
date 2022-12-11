## Getting Started

First:

npm install

Then run the development server:

npm run dev

To add code go to /pages/index.js and then everything is the same as in a react app;

## API specs
  - /api/shelter/add: 
    * name: string
    * ... (data)
  - /api/shelter/[name]:
    * action: get | update | delete
      - update: 
        - ... (data)
  - /api/location/add: 
    * name: string
    * shelters: string[]
  - /api/location/[name]:
    * action: list | add | remove | delete (/remove will remove a shelter, /delete will delete the location)
      - add:
        - shelters: string[]
      - remove:
        - shelter: string
      
