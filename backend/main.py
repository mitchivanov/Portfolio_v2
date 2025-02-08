from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Настройка CORS для разрешения запросов с React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # URL React-приложения
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Пример данных
@app.get("/api/items")
def get_items():
    return {"items": ["Apple", "Banana", "Cherry"]}
