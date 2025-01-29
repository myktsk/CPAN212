# Lab 2 Express

Author: Miyuki Tuisku (n01581172)  
Course: CPAN-212 0NA

## Get Started 📦

```sh
npm i
```

## How to Run ✅

```sh
npm start
```

and the server will run on `http://localhost:8000`

## API Reference 🌐

### `GET` `http://localhost:8000/name`

Renders my name

#### Request/Response

![screenshot](https://github.com/user-attachments/assets/3053c0ad-1448-485a-bbe5-a084db89b7f8)

### `GET` `http://localhost:8000/greeting`

Renders my name and student number

#### Request/Response

![screenshot](https://github.com/user-attachments/assets/c3982cba-020a-45de-9e63-9fa2f974d44f)

### `GET` `http://localhost:8000/add`

Returns the addition of 2 numbers

#### Query Parameters:

- `x` (number) - First number
- `y` (number) - Second number

#### Example of Request/Response

![screenshot](https://github.com/user-attachments/assets/8ca1cec8-ac0b-40d5-9054-d08b24d08136)

### `GET` `http://localhost:8000/calculate`

Operates math calculation

#### Query Parameters:

- `a` (number) - First number
- `b` (number) - Second number
- `operation` (string) - Mathematical operation (`+`, `-`, `*`, `/`, `**`)

#### Example of Request/Response

![screenshot](https://github.com/user-attachments/assets/1817c976-72ed-4fe1-8865-c1ecdb2e2c27)
