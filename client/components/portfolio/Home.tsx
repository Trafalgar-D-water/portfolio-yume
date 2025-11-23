import React, { useState, useEffect, useCallback } from 'react';
import { Github } from 'lucide-react';

// Game Constants
const GRID_SIZE = 20; // 20x20 grid? Maybe smaller for the specific UI size
const BOARD_WIDTH = 24; // Matches the visual roughly
const BOARD_HEIGHT = 40;
const INITIAL_SNAKE = [{ x: 10, y: 20 }, { x: 10, y: 21 }, { x: 10, y: 22 }, { x: 10, y: 23 }];
const INITIAL_DIRECTION = 'UP';
const GAME_SPEED = 100;

export function Home() {
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [food, setFood] = useState({ x: 10, y: 10 });
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [foodLeft, setFoodLeft] = useState(10);

    // Generate random food position
    const generateFood = useCallback(() => {
        return {
            x: Math.floor(Math.random() * BOARD_WIDTH),
            y: Math.floor(Math.random() * BOARD_HEIGHT)
        };
    }, []);

    // Start Game
    const startGame = () => {
        setSnake(INITIAL_SNAKE);
        setDirection(INITIAL_DIRECTION);
        setGameOver(false);
        setGameStarted(true);
        setScore(0);
        setFoodLeft(10);
        setFood(generateFood());
    };

    // Handle Keyboard Input
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!gameStarted || gameOver) return;

            switch (e.key) {
                case 'ArrowUp':
                    if (direction !== 'DOWN') setDirection('UP');
                    break;
                case 'ArrowDown':
                    if (direction !== 'UP') setDirection('DOWN');
                    break;
                case 'ArrowLeft':
                    if (direction !== 'RIGHT') setDirection('LEFT');
                    break;
                case 'ArrowRight':
                    if (direction !== 'LEFT') setDirection('RIGHT');
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [direction, gameStarted, gameOver]);

    // Game Loop
    useEffect(() => {
        if (!gameStarted || gameOver) return;

        const moveSnake = () => {
            const newSnake = [...snake];
            const head = { ...newSnake[0] };

            switch (direction) {
                case 'UP': head.y -= 1; break;
                case 'DOWN': head.y += 1; break;
                case 'LEFT': head.x -= 1; break;
                case 'RIGHT': head.x += 1; break;
            }

            // Check Collisions (Walls)
            if (head.x < 0 || head.x >= BOARD_WIDTH || head.y < 0 || head.y >= BOARD_HEIGHT) {
                setGameOver(true);
                return;
            }

            // Check Collisions (Self)
            if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
                setGameOver(true);
                return;
            }

            newSnake.unshift(head);

            // Check Food
            if (head.x === food.x && head.y === food.y) {
                setScore(prev => prev + 1);
                setFoodLeft(prev => Math.max(0, prev - 1));
                setFood(generateFood());
                // Don't pop tail, so snake grows
            } else {
                newSnake.pop();
            }

            setSnake(newSnake);
        };

        const gameInterval = setInterval(moveSnake, GAME_SPEED);
        return () => clearInterval(gameInterval);
    }, [snake, direction, gameStarted, gameOver, food, generateFood]);

    return (
        <div className="h-full w-full flex items-center justify-center relative overflow-hidden">
            {/* Background Gradient Effects */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 md:px-12 items-center">
                {/* Left Column: Hero Text */}
                <div className="space-y-8">
                    <div className="space-y-2">
                        <p className="text-lg text-white font-medium">Hi all. I am</p>
                        <h1 className="text-6xl md:text-7xl font-normal text-white">
                            Priyanshu Patnayak
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-secondary flex items-center gap-2">
                            <span className="text-secondary">&gt;</span>
                            Full-stack developer
                        </h2>
                    </div>

                    <div className="space-y-2 text-muted-foreground font-mono text-sm">
                        <p>
                            <span className="text-muted-foreground">// complete the game to continue</span>
                        </p>
                        <p>
                            <span className="text-muted-foreground">// you can also see it on my Github page</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-secondary">const</span>
                            <span className="text-accent">githubLink</span>
                            <span className="text-white">=</span>
                            <a
                                href="https://github.com/priyanshupatnayak"
                                target="_blank"
                                rel="noreferrer"
                                className="text-orange-300 hover:underline break-all"
                            >
                                "https://github.com/priyanshupatnayak"
                            </a>
                        </p>
                    </div>
                </div>

                {/* Right Column: Game Visual */}
                <div className="relative hidden lg:block">
                    <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-border rounded-lg p-8 backdrop-blur-sm relative shadow-2xl">
                        {/* Screws */}
                        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-border shadow-inner"></div>
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-border shadow-inner"></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-border shadow-inner"></div>
                        <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-border shadow-inner"></div>

                        <div className="flex gap-6">
                            {/* Game Board */}
                            <div className="bg-vscode-editor border border-border rounded shadow-inner w-60 h-96 relative overflow-hidden">
                                {/* Grid Rendering */}
                                {!gameStarted && !gameOver && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button
                                            onClick={startGame}
                                            className="bg-secondary text-white px-6 py-2 rounded hover:bg-secondary/80 transition-colors font-mono text-sm"
                                        >
                                            start-game
                                        </button>
                                    </div>
                                )}

                                {gameStarted && (
                                    <>
                                        {/* Snake */}
                                        {snake.map((segment, index) => (
                                            <div
                                                key={`${segment.x}-${segment.y}`}
                                                className="absolute w-2.5 h-2.5 bg-green-400 rounded-sm shadow-[0_0_5px_rgba(74,222,128,0.5)]"
                                                style={{
                                                    left: `${segment.x * 10}px`,
                                                    top: `${segment.y * 10}px`,
                                                    opacity: 1 - index / (snake.length + 5) // Fade tail slightly
                                                }}
                                            />
                                        ))}

                                        {/* Food */}
                                        <div
                                            className="absolute w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)] animate-pulse"
                                            style={{
                                                left: `${food.x * 10}px`,
                                                top: `${food.y * 10}px`
                                            }}
                                        />
                                    </>
                                )}

                                {gameOver && (
                                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center z-10">
                                        <div className="bg-black/40 px-4 py-2 rounded text-green-400 font-mono text-xl tracking-widest mb-4">
                                            GAME OVER!
                                        </div>
                                        <button
                                            onClick={startGame}
                                            className="text-white text-sm hover:text-secondary transition-colors"
                                        >
                                            start-again
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Instructions */}
                            <div className="space-y-4">
                                <div className="bg-black/20 rounded p-4 space-y-2">
                                    <p className="text-white text-xs font-mono">// use keyboard</p>
                                    <p className="text-white text-xs font-mono">// arrows to play</p>

                                    <div className="grid grid-cols-3 gap-1 mt-2 w-fit mx-auto">
                                        <div></div>
                                        <div
                                            className={`w-8 h-8 bg-black/40 rounded border border-border flex items-center justify-center text-white text-xs cursor-pointer hover:bg-white/10 ${direction === 'UP' ? 'bg-white/20' : ''}`}
                                            onClick={() => direction !== 'DOWN' && setDirection('UP')}
                                        >▲</div>
                                        <div></div>
                                        <div
                                            className={`w-8 h-8 bg-black/40 rounded border border-border flex items-center justify-center text-white text-xs cursor-pointer hover:bg-white/10 ${direction === 'LEFT' ? 'bg-white/20' : ''}`}
                                            onClick={() => direction !== 'RIGHT' && setDirection('LEFT')}
                                        >◀</div>
                                        <div
                                            className={`w-8 h-8 bg-black/40 rounded border border-border flex items-center justify-center text-white text-xs cursor-pointer hover:bg-white/10 ${direction === 'DOWN' ? 'bg-white/20' : ''}`}
                                            onClick={() => direction !== 'UP' && setDirection('DOWN')}
                                        >▼</div>
                                        <div
                                            className={`w-8 h-8 bg-black/40 rounded border border-border flex items-center justify-center text-white text-xs cursor-pointer hover:bg-white/10 ${direction === 'RIGHT' ? 'bg-white/20' : ''}`}
                                            onClick={() => direction !== 'LEFT' && setDirection('RIGHT')}
                                        >▶</div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-white text-xs font-mono">// food left</p>
                                    <div className="grid grid-cols-5 gap-2">
                                        {[...Array(10)].map((_, i) => (
                                            <div key={i} className={`w-2 h-2 rounded-full ${i < foodLeft ? 'bg-green-400 shadow-[0_0_5px_rgba(74,222,128,0.5)]' : 'bg-gray-700'}`}></div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2 pt-4">
                                    <p className="text-white text-xs font-mono">// score</p>
                                    <p className="text-xl text-white font-bold">{score}</p>
                                </div>
                            </div>
                        </div>

                        <button className="absolute bottom-4 right-4 border border-white/20 hover:border-white text-white px-4 py-1 rounded text-sm transition-colors">
                            skip
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
