const users = [
    { name: "Alice", email: "alice@example.com", age: 25, isActive: true },
    { name: "Bob", email: "bob@example.com", age: 30, isActive: false },
    { name: "Charlie", email: "charlie@example.com", age: 35, isActive: true },
  ];
  
  function formatUserData(users) {
    // Your implementation here
    //Name: [name], Email: [email]
    return users.filter(a => a.isActive).map(a => `Name: ${a["name"]} Email: ${a["email"]}`)
  }
  
  const formattedData = formatUserData(users);
  console.log(formattedData);
  // Expected output:
  // ["Name: Alice, Email: alice@example.com", "Name: Charlie, Email: charlie@example.com"]
