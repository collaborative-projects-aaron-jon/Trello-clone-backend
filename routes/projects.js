const router = require('express').Router();
const Projects = require('../mongo/schemas/Projects');

router.get('/', async (req, res) => {
    try {
        const { userEmail } = req.query;
        const allProjects = await Projects.find();
        const relevent = allProjects.filter(project => {
            let isRelevent = false
            console.log(project.members)
            project.members.map(member => {
                console.log('member.email: ', member.email)
                console.log('userEmail: ', userEmail)
                if(member.email === userEmail){
                    isRelevent = true
                }
            })
            console.log(isRelevent)
            return isRelevent;
        })
        console.log(relevent);
        res.json({
            success: true,
            data: {
                relevent
            }
        })
    } catch(err) {
        console.log('err: ', err)
        res.json({
            success: false,
            error: err
        })
    }
});

router.get('/:projectId', async (req, res) => {
    try {
        const { projectId } = req.params;
        const project = await Projects.findOne({
            _id: projectId
        });
        res.json({
            success: true,
            data: {
                project
            }
        })
    } catch(err) {
        console.log('err: ', err)
        res.json({
            success: false,
            error: err
        })
    }
});

router.post('/', async (req, res) => {
    try {
        const { email, name, projectName, avatarUrl } = req.body;
        const project = await Projects.create({
            name: projectName,
            members: [{
                name,
                avatarUrl,
                email
            }]
        });
        res.json({
            success: true,
            data: {
                project
            }
        })
    } catch(err) {
        console.log('err: ', err);
        res.json({
            success: false,
            error: err
        })
    }
});


router.post('/:projectId/tasks', async (req, res) => {
    try {
        const { projectId } = req.params;
        const { taskName } = req.body;
        const project = await Projects.findOne({
            _id: projectId
        });
        const task = {
            projectId,
            name: taskName
        }
        project.tasks.push(task)
        await project.save();
        res.json({
            success: true,
            data: {
                project
            }
        })
    } catch(err) {
        console.log('err: ', err);
        res.json({
            success: false,
            error: err
        })
    }
})

router.post('/join', async (req, res) => {
    try {
        const { inviteId, name, email, avatarUrl } = req.body;
        const project = await Projects.findOne({
            _id: inviteId
        });
        const joiningMember = {
            name,
            avatarUrl,
            email
        }
        project.members.push(joiningMember);
        await project.save();
        res.json({
            success: true,
            data: {
                project
            }
        })
    } catch(err) {
        console.log('err: ', err);
        res.json({
            success: false,
            error: err
        })
    }
})



module.exports = router;