# Web Server Implementation Using VMware and Ubuntu Server

A group project website created to showcase the implementation of a web server environment using VMware, Ubuntu Server, and Nginx.

## Project Overview

This project was developed as part of an academic assignment to learn and demonstrate:

- Virtualization using VMware
- Ubuntu Server installation and configuration
- Nginx web server setup
- Basic Linux server administration
- Website deployment and hosting concepts

The website presents project information, team member profiles, technologies used, implementation timeline, and learning outcomes.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- VMware
- Ubuntu Server
- Nginx
- Git

---

## Team Members

| Name                     | Student ID |
| ------------------------ | ---------- |
| Ahmad Fauzi Kurniawan    | 15250158   |
| Dimaz Rafif Alvaro       | 15250511   |
| Farhan                   | 15250076   |
| Muhamad Aridho           | 15250365   |
| Muhamad Rifqi Adriansyah | 15250900   |

Class: **15.2A.01**  
Study Program: **Informatics**  
Faculty: **Faculty of Information Technology (FTI)**

---

## Project Structure

```text
project/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

---

## Prerequisites

Before cloning the project, make sure Git is installed on your system.

### Windows

1. Download Git from:
   https://git-scm.com/downloads

2. Run the installer using the default settings.

3. Verify installation:

```bash
git --version
```

---

### Ubuntu / Debian

```bash
sudo apt update
sudo apt install git -y
```

Verify installation:

```bash
git --version
```

---

## Clone the Repository

Open Terminal, PowerShell, or Command Prompt and run:

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
```

Move into the project directory:

```bash
cd REPOSITORY
```

> Replace `USERNAME` and `REPOSITORY` with the actual GitHub repository information.

---

## Running the Website

Since this is a static website, no build process is required.

Simply open:

```text
index.html
```

in your preferred web browser.

Alternatively, you can serve it through Nginx, Apache, or any local web server.

---

## Hosting with Nginx (Optional)

Copy the project files into the web root directory:

```bash
sudo cp -r * /var/www/html/
```

Restart Nginx:

```bash
sudo systemctl restart nginx
```

Check service status:

```bash
sudo systemctl status nginx
```

Access the website through:

```text
http://SERVER_IP
```

---

## Learning Outcomes

Through this project, the team gained practical experience in:

- Linux server administration
- Virtual machine management
- Web server deployment
- Git version control
- Front-end web development
- Basic infrastructure concepts

---

## Repository Workflow

After making changes:

Check modified files:

```bash
git status
```

Stage changes:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Update project"
```

Push to GitHub:

```bash
git push origin main
```

---

## License

This project was created for educational purposes and academic learning.

---

**Web Server Implementation Project**  
Class 15.2A.01  
Informatics Study Program  
Faculty of Information Technology (FTI)  
2026
