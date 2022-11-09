-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-11-2022 a las 23:11:53
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `i-mesas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencia`
--

CREATE TABLE `asistencia` (
  `IdAsistencia` int(11) NOT NULL,
  `AsisFecha` date NOT NULL,
  `AsisPresencia` tinyint(4) NOT NULL,
  `idpersona` varchar(50) NOT NULL,
  `iduniad` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificacion`
--

CREATE TABLE `calificacion` (
  `IdCalificacion` int(11) NOT NULL,
  `CalifNota` int(5) NOT NULL,
  `CalifCondicion` varchar(30) NOT NULL,
  `Calif-Fecha` date NOT NULL,
  `Id-persona` varchar(50) NOT NULL,
  `Id-Unidad` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrera`
--

CREATE TABLE `carrera` (
  `IdCarrera` int(11) NOT NULL,
  `Carrera` varchar(50) NOT NULL,
  `Id-unidad` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `condicion`
--

CREATE TABLE `condicion` (
  `IdCondicion` int(11) NOT NULL,
  `Condicion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscripciones`
--

CREATE TABLE `inscripciones` (
  `IdIncripcion` int(11) NOT NULL,
  `Id-Persona` varchar(50) NOT NULL,
  `Id-unidad` varchar(50) NOT NULL,
  `Id-turno` varchar(20) NOT NULL,
  `Id-llamado` varchar(20) NOT NULL,
  `Id-condicion` varchar(15) NOT NULL,
  `Idturno` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `llamado`
--

CREATE TABLE `llamado` (
  `Id-Llamado` int(11) NOT NULL,
  `LlamadoMateria` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matricula`
--

CREATE TABLE `matricula` (
  `Id-Matricula` int(11) NOT NULL,
  `Matricula` varchar(50) NOT NULL,
  `Id-carrera` varchar(50) NOT NULL,
  `Id-persona` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `IdPersona` int(11) NOT NULL,
  `Cuil` varchar(11) NOT NULL,
  `Nombre` varchar(60) NOT NULL,
  `Apellido` varchar(60) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `tusuario` varchar(40) NOT NULL,
  `Contrasenia` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`IdPersona`, `Cuil`, `Nombre`, `Apellido`, `Email`, `tusuario`, `Contrasenia`) VALUES
(3, '2147483647', 'Alexis Maximiliano', 'Primo Olivari', 'primoalexis4@gmail.com', 'Preseptor', '2455'),
(4, '20411190316', 'Alexis Maximiliano', 'Primo Olivari', 'primoalexis84@gmail.com', 'Preseptor', '2455'),
(5, '2147483647', 'Alexis Maximiliano', 'Primo Olivari', 'primoalexis4@gmail.com', 'maestro', '2455');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo-usuario`
--

CREATE TABLE `tipo-usuario` (
  `Idt-usuario` int(11) NOT NULL,
  `Usuario` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turno`
--

CREATE TABLE `turno` (
  `Id-turno` int(11) NOT NULL,
  `Turno` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tusuario`
--

CREATE TABLE `tusuario` (
  `idtusuario` int(11) NOT NULL,
  `tusuario` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidadcurricular`
--

CREATE TABLE `unidadcurricular` (
  `Id-Unidad` int(11) NOT NULL,
  `Materias` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD PRIMARY KEY (`IdAsistencia`),
  ADD KEY `idpersona` (`idpersona`),
  ADD KEY `iduniad` (`iduniad`);

--
-- Indices de la tabla `calificacion`
--
ALTER TABLE `calificacion`
  ADD PRIMARY KEY (`IdCalificacion`),
  ADD KEY `Id-persona` (`Id-persona`),
  ADD KEY `Id-Unidad` (`Id-Unidad`);

--
-- Indices de la tabla `carrera`
--
ALTER TABLE `carrera`
  ADD PRIMARY KEY (`IdCarrera`),
  ADD KEY `Id-unidad` (`Id-unidad`);

--
-- Indices de la tabla `condicion`
--
ALTER TABLE `condicion`
  ADD PRIMARY KEY (`IdCondicion`);

--
-- Indices de la tabla `inscripciones`
--
ALTER TABLE `inscripciones`
  ADD PRIMARY KEY (`IdIncripcion`),
  ADD KEY `IdIncripcion` (`IdIncripcion`),
  ADD KEY `Id-Persona` (`Id-Persona`),
  ADD KEY `Id-unidad` (`Id-unidad`),
  ADD KEY `Id-turno` (`Id-turno`),
  ADD KEY `Id-llamado` (`Id-llamado`),
  ADD KEY `Id-condicion` (`Id-condicion`),
  ADD KEY `Idturno` (`Idturno`);

--
-- Indices de la tabla `llamado`
--
ALTER TABLE `llamado`
  ADD PRIMARY KEY (`Id-Llamado`);

--
-- Indices de la tabla `matricula`
--
ALTER TABLE `matricula`
  ADD PRIMARY KEY (`Id-Matricula`),
  ADD KEY `Id-carrera` (`Id-carrera`),
  ADD KEY `Id-persona` (`Id-persona`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`IdPersona`),
  ADD KEY `T-usuario` (`tusuario`);

--
-- Indices de la tabla `tipo-usuario`
--
ALTER TABLE `tipo-usuario`
  ADD PRIMARY KEY (`Idt-usuario`);

--
-- Indices de la tabla `turno`
--
ALTER TABLE `turno`
  ADD PRIMARY KEY (`Id-turno`);

--
-- Indices de la tabla `tusuario`
--
ALTER TABLE `tusuario`
  ADD PRIMARY KEY (`idtusuario`);

--
-- Indices de la tabla `unidadcurricular`
--
ALTER TABLE `unidadcurricular`
  ADD PRIMARY KEY (`Id-Unidad`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  MODIFY `IdAsistencia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `calificacion`
--
ALTER TABLE `calificacion`
  MODIFY `IdCalificacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carrera`
--
ALTER TABLE `carrera`
  MODIFY `IdCarrera` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `condicion`
--
ALTER TABLE `condicion`
  MODIFY `IdCondicion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `inscripciones`
--
ALTER TABLE `inscripciones`
  MODIFY `IdIncripcion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `llamado`
--
ALTER TABLE `llamado`
  MODIFY `Id-Llamado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `matricula`
--
ALTER TABLE `matricula`
  MODIFY `Id-Matricula` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `IdPersona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tipo-usuario`
--
ALTER TABLE `tipo-usuario`
  MODIFY `Idt-usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `turno`
--
ALTER TABLE `turno`
  MODIFY `Id-turno` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tusuario`
--
ALTER TABLE `tusuario`
  MODIFY `idtusuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `unidadcurricular`
--
ALTER TABLE `unidadcurricular`
  MODIFY `Id-Unidad` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
