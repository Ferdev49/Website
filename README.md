# Portfolio - DevOps & Cloud Engineer

Mi portfolio profesional como Junior DevOps & Cloud Engineer, construido con React, desplegado en AWS y automatizado con GitHub Actions.

**URL:** https://dymxousj4rhos.cloudfront.net

---

## 🏗️ Stack Tecnológico

| Categoría | Tecnología |
|-----------|-----------|
| **Frontend** | React, Tailwind CSS |
| **Hosting** | AWS S3 + CloudFront CDN |
| **Infrastructure** | Terraform (IaC) |
| **CI/CD** | GitHub Actions |
| **Version Control** | Git & GitHub |

---

## 🚀 Características

- ✅ **Responsive Design**: Mobile-first, funciona en cualquier dispositivo
- ✅ **Dark Theme + Neon Accents**: Diseño moderno y profesional
- ✅ **CDN Global**: Contenido servido desde el servidor más cercano
- ✅ **HTTPS Seguro**: SSL/TLS con AWS Certificate Manager
- ✅ **Despliegue Automático**: Push a GitHub = Auto-deploy a producción
- ✅ **Infrastructure as Code**: Todo definido en Terraform

---

## 📂 Estructura del Proyecto
```text
portfolio-website/              # React app
├── src/
│   ├── App.jsx               # Componente principal
│   └── (componentes)
├── public/
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions CI/CD
└── package.json
portfolio-terraform/           # Infrastructure as Code
├── providers.tf              # Configuración de AWS
├── variables.tf              # Variables
├── s3.tf                     # S3 bucket configuration
├── cloudfront.tf             # CloudFront distribution
└── outputs.tf                # Outputs
```

---

## 🔄 Flujo de Despliegue (CI/CD)

git push origin main
↓
GitHub Actions se dispara
↓
npm install & npm run build
↓
aws s3 sync (sube a S3)
↓
cloudfront create-invalidation (limpia caché)
↓
Sitio actualizado en vivo ✅


**Tiempo total:** ~45 segundos

---

## 💰 Costo Mensual

| Servicio | Costo |
|----------|-------|
| S3 Storage & Requests | $0.14 |
| CloudFront | $0.57 |
| **Total** | **~$0.71/mes** |

*Primeros 12 meses: GRATIS con AWS Free Tier*

---

## 🛠️ Cómo usar este repositorio

### **Hacer cambios localmente:**

```bash
# Clonar
git clone https://github.com/Ferdev49/portfolio-website.git
cd portfolio-website

# Instalar dependencias
npm install

# Desarrollo local
npm start

# Build para producción
npm run build
```

### **Desplegar cambios:**

```bash
# Editar código
git add .
git commit -m "Update portfolio"
git push origin main

# GitHub Actions hace el resto automáticamente ✅
```

### **Modificar infraestructura (AWS):**

```bash
cd portfolio-terraform

# Ver cambios
terraform plan

# Aplicar cambios
terraform apply
```

---

## 📊 Secciones del Portfolio

- **Hero**: Presentación con CTA buttons
- **About**: Mi historia como DevOps engineer
- **Skills**: Tecnologías (Cloud, DevOps, Development)
- **Projects**: 3 proyectos destacados con links a GitHub
- **Contact**: Email, LinkedIn, GitHub

---

## 🎓 Aprendizajes Clave

Este proyecto demuestra:

- ✅ Frontend moderno con React + Tailwind
- ✅ AWS services (S3, CloudFront, IAM)
- ✅ Infrastructure as Code con Terraform
- ✅ CI/CD automation con GitHub Actions
- ✅ Git workflow profesional
- ✅ Security best practices (OAI, bucket policies, least privilege)

---

## 📝 Notas

- Portfolio actualizable sin downtime
- Todos los cambios versionados en Git
- Infraestructura reproducible y auditable
- Costo mínimo (~$9/año)

---

## 📞 Contacto

- **Email:** fercho00.fb@gmail.com
- **LinkedIn:** fbecerrildev
- **GitHub:** Ferdev49

---

**Built with React, Terraform, and GitHub Actions** 🚀