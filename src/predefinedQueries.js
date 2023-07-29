const predefinedQueries = [
	{
		name: "Query 1",
		query: "select * from customers;",
		data: [
			{ id: 1, name: "John Doe", email: "john@example.com", age: 30 },
			{ id: 2, name: "Jane Smith", email: "jane@example.com", age: 25 },
			{ id: 3, name: "Michael Johnson", email: "michael@example.com", age: 35 },
			{ id: 4, name: "Emily Davis", email: "emily@example.com", age: 28 },
			{ id: 5, name: "David Lee", email: "david@example.com", age: 40 },
			{ id: 6, name: "Sophia Kim", email: "sophia@example.com", age: 22 },
		],
	},
	{
		name: "Query 2",
		query: "select * from products;",
		data: [
			{ id: 101, name: "Product A", price: 10.99, category: "Electronics" },
			{ id: 102, name: "Product B", price: 19.99, category: "Clothing" },
			{ id: 103, name: "Product C", price: 5.99, category: "Electronics" },
			{ id: 104, name: "Product D", price: 12.49, category: "Home" },
			{ id: 105, name: "Product E", price: 8.99, category: "Books" },
			{ id: 106, name: "Product F", price: 29.99, category: "Clothing" },
		],
	},
	{
		name: "Query 3",
		query: "select * from orders;",
		data: [
			{ id: 1001, customer_id: 1, total: 50.0, date: "2023-07-29" },
			{ id: 1002, customer_id: 2, total: 35.0, date: "2023-07-28" },
			{ id: 1003, customer_id: 3, total: 70.0, date: "2023-07-27" },
			{ id: 1004, customer_id: 4, total: 20.0, date: "2023-07-26" },
			{ id: 1005, customer_id: 5, total: 45.0, date: "2023-07-25" },
			{ id: 1006, customer_id: 6, total: 60.0, date: "2023-07-24" },
		],
	},
	{
		name: "Query 4",
		query: "select * from employees;",
		data: [
			{ id: 101, name: "John Smith", title: "Manager", department: "Sales" },
			{
				id: 102,
				name: "Jane Doe",
				title: "Sales Representative",
				department: "Marketing",
			},
			{
				id: 103,
				name: "Robert Johnson",
				title: "Manager",
				department: "Operations",
			},
			{
				id: 104,
				name: "Linda Williams",
				title: "Administrator",
				department: "HR",
			},
			{
				id: 105,
				name: "Michael Brown",
				title: "Developer",
				department: "Engineering",
			},
			{
				id: 106,
				name: "Emily Jones",
				title: "Designer",
				department: "Creative",
			},
		],
	},
	{
		name: "Query 5",
		query: "select * from categories;",
		data: [
			{ id: 1, name: "Electronics" },
			{ id: 2, name: "Clothing" },
			{ id: 3, name: "Books" },
			{ id: 4, name: "Home Decor" },
			{ id: 5, name: "Beauty" },
			{ id: 6, name: "Toys" },
		],
	},
	{
		name: "Query 6",
		query: "select * from suppliers;",
		data: [
			{
				id: 201,
				name: "Supplier X",
				address: "123 Main St",
				contact: "John",
				phone: "555-1234",
			},
			{
				id: 202,
				name: "Supplier Y",
				address: "456 Broadway",
				contact: "Jane",
				phone: "555-5678",
			},
			{
				id: 203,
				name: "Supplier Z",
				address: "789 Park Ave",
				contact: "Robert",
				phone: "555-9876",
			},
			{
				id: 204,
				name: "Supplier A",
				address: "101 Oak St",
				contact: "Linda",
				phone: "555-4567",
			},
			{
				id: 205,
				name: "Supplier B",
				address: "777 Elm St",
				contact: "Michael",
				phone: "555-7890",
			},
			{
				id: 206,
				name: "Supplier C",
				address: "222 Pine St",
				contact: "Emily",
				phone: "555-6543",
			},
		],
	},
];

export default predefinedQueries;
