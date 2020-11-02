const Vermeer = require("./watercolor.json");
let proj = [];

module.exports = {
    getProject: (req, res) => {
        console.log(Vermeer)
        res.status(200).send(Vermeer)
    },
    timeForProjects: (req, res) => {
        // only return projects with tutorials shorter than input
        const { minutesUserHas } = req.query;
        const projArray = [];

        if (minutesUserHas) {
            const filterArt = Vermeer.filter(
                (watercolor) => watercolor.tutorialTime >= minutesUserHas)
                // should filter out projects for which user does not have time
            
            // console.log(filterArt);

            for(let i = 0; i < projArray.length; i++) {
                if (filterArt[i]) {
                    projArray.push(filterArt[i]);
                }
            }
            res.status(200).send(projArray)
        } else if 
            (projArray.length === 0) {
            return "No tutorials in the time frame available - create your own!";
            }
         else {
            res.status(200).send(Vermeer)
            }

        },  

    addProjectName: (req, res) => {
        const { id } = req.params;
        const inCatalogue = {...vermeer.find((watercolor) => watercolor.id === +id) };
        
        inCatalogue.name = "";

        proj.push(inCatalogue);

        res.status(200).send(inCatalogue)
   },
   editArt: (req, res) => {
       const { index } = req.params;
       const { name } = req.body;

       proj[index].name = 

       res.status(200).send(all)
   },
   
   endProject: (req, res) => {
       const { index } = req.params;

       proj.splice(index, 1);

       res.status(200).send(proj);
   }
}