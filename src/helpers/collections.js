const roleTypes = {
    admin: 0,
    mentor: 1,
    user: 2
}
const roleTypesCollection = [
    {
        id: roleTypes.admin,
        name: 'Administrator'
    },
    {
        id: roleTypes.mentor,
        name: 'Mentor'
    },
    {
        id: roleTypes.user,
        name: 'User'
    }
]

export {
    roleTypes,
    roleTypesCollection
}