

const getUsers = ((req, res) => {
  try {
    const users = [
      { id: 1, name: "Miguel" },
      { id: 2, name: "Estefania" },
      { id: 3, name: "Rubén" },
    ];

    return res.status(200).json({ users });
  } catch (error) {
    throw error;
  }
})

export default {
  getUsers
}

