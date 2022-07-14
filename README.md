# Work Motion Challenge

I used module structure to make project scalable as possible

The advantage here is

- To avoid boilerplate code ocurred in functional approach as we split each function across modules
- Reduce interference happened between developers when they work at same time on different features
  as they will most probably work on different modules e.g. Employees, Authentication, Common ...etc

#### Common module

- Include all components, containers that could be used across other modules

#### Employees module

- Include all containers, and views that needed inside the module
- Store state, action, reducer.. etc that's related to employees view

#### store

- Integrate all modules` state, actions and reducers
- Configure app store

#### axios

- initialize axios instance for each module

## Getting Started

To deploy this project run

- create `db.json` file in server root and add initial data

```json
{
  "employees": [
    {
      "id": 1,
      "name": "Mahmoud Shokry",
      "status": "active"
    },
    {
      "id": 2,
      "name": "Jack Samy",
      "status": "inactive"
    },
    {
      "id": 3,
      "name": "Karim Fathy",
      "status": "active"
    }
  ]
}
```

- run `npm install` on server root folder

- run `npm install` on client root folder

- run `npm run start` on server root folde, It should work on localhost:3000

- run `npm run start` on client root folder, It should work on localhost:3001

## API Reference

#### Get all employees

```
  GET /employees
```

#### Post employee

```
  POST /employees
```

| Parameter | Type     | Description                                                  |
| :-------- | :------- | :----------------------------------------------------------- |
| `id`      | `number` | **Required**. check ids first in db.json to create unique id |
| `name`    | `string` | **Required**.                                                |
| `status`  | `string` | **Required**. e.g. added, approved, active, inactive         |

#### Patch employee

```
  PATCH /employees/:id
```

| Parameter | Type     | Description                                                  |
| :-------- | :------- | :----------------------------------------------------------- |
| `id`      | `number` | **Required**. check ids first in db.json to create unique id |
| `name`    | `string` | **Required**.                                                |
| `status`  | `string` | **Required**. e.g. added, approved, active, inactive         |
