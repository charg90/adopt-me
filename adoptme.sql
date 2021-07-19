-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-07-2021 a las 22:48:11
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `adoptme`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galgos`
--

CREATE TABLE `galgos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `id_organizacion` int(11) NOT NULL,
  `color` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `edad` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `adoptado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `galgos`
--

INSERT INTO `galgos` (`id`, `nombre`, `id_organizacion`, `color`, `edad`, `descripcion`, `eliminado`, `adoptado`, `ts_create`, `ts_update`) VALUES
(1, 'capitan', 1, 'marron', '7', 'juegueton, se lleva bien con otros perros se lleva bien con chicos', 0, 0, '2021-06-19 17:37:38', '2021-07-03 14:50:25'),
(2, 'beto', 1, 'negro', '3', 'muy dormilon siempre con ganas de jugar', 1, 0, '2021-06-28 17:53:05', '2021-07-11 15:31:53'),
(3, 'poncho', 1, 'blanco', '3', 'muy dormilon siempre con ganas de jugar', 0, 0, '2021-06-28 17:53:37', '2021-07-03 14:50:34'),
(4, 'toto', 2, 'marron', '2', 'dormilon', 1, 0, '2021-06-29 18:35:13', '2021-07-10 10:13:38'),
(5, 'poncho', 1, 'negro', '3', 'muy dormilon siempre con ganas de jugar', 0, 0, '2021-07-12 17:36:20', '2021-07-12 17:36:20'),
(6, 'roco', 1, 'Atigrado', '2', 'juegueton se lleva bien con otros perros', 0, 0, '2021-07-12 20:46:25', '2021-07-13 21:08:06'),
(7, 'beto', 2, 'beige', '5', 'juegueton se lleva bien con otros perros', 0, 0, '2021-07-15 18:34:05', '2021-07-15 18:34:05'),
(8, 'capitan', 2, 'negro', '2', 'cachorro, muy cariñoso', 0, 0, '2021-07-15 18:35:36', '2021-07-15 18:35:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galgos_image`
--

CREATE TABLE `galgos_image` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `id_galgo` int(11) NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `galgos_image`
--

INSERT INTO `galgos_image` (`id`, `uid`, `id_galgo`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, '18027930-e0d8-44d9-9965-a61546512738.jpeg', 6, 0, '2021-07-12 20:46:25', '2021-07-14 18:45:19'),
(2, '9674a894-12f6-4de6-ac02-3373239e9461.jpeg', 7, 0, '2021-07-15 18:34:05', '2021-07-15 18:34:05'),
(3, '0002a490-9554-435e-8f50-c37df8ebce3a.jpeg', 8, 0, '2021-07-15 18:35:36', '2021-07-15 18:35:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `organizacion`
--

CREATE TABLE `organizacion` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `telefono` int(11) NOT NULL,
  `pass` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `habilitado` tinyint(4) NOT NULL DEFAULT 1,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `organizacion`
--

INSERT INTO `organizacion` (`id`, `nombre`, `telefono`, `pass`, `direccion`, `habilitado`, `ts_create`, `ts_update`) VALUES
(1, 'Guardianes galgos', 4854548, '123', 'calle siempre falsa 123', 1, '2021-06-19 15:56:30', '2021-07-11 15:42:22'),
(2, 'Galgos del sur', 61512515, '1234', 'calle siempre falsa 123', 1, '2021-06-19 16:01:53', '2021-07-11 15:41:22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `mail` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `confirmacionCorreo` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `telefono` int(11) NOT NULL,
  `admin` tinyint(4) NOT NULL DEFAULT 0,
  `habilitado` tinyint(4) NOT NULL DEFAULT 0,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `username`, `pass`, `mail`, `confirmacionCorreo`, `telefono`, `admin`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(42, 'carlos', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'carlosgbozzola@hotmail.com', 'f1833867-1652-461f-897c-b50a5b0fc02b', 111, 1, 1, 0, '2021-06-24 19:23:15', '2021-07-14 20:35:55'),
(43, 'homero', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'carlosgbozzola@hotmail.com', '0e9fef80-d920-43fa-93ac-2f027b992584', 1112312, 0, 1, 0, '2021-07-09 13:01:01', '2021-07-11 17:32:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `voluntario`
--

CREATE TABLE `voluntario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `mail` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `voluntario`
--

INSERT INTO `voluntario` (`id`, `nombre`, `apellido`, `direccion`, `mail`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'leo', 'messi', 'calle falsa 123', 'leoomessi@hotmail.com', 0, '2021-07-04 10:40:02', '2021-07-04 10:40:02'),
(2, 'leo', 'messi', 'calle falsa 123', 'leoomessi@hotmail.com', 0, '2021-07-04 10:44:46', '2021-07-04 10:44:46'),
(3, 'beto', 'messi', 'calle falsa 123', 'leoomessi@hotmail.com', 0, '2021-07-04 10:48:32', '2021-07-04 10:48:32'),
(4, 'asda', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 0, '2021-07-04 10:51:15', '2021-07-04 10:51:15'),
(5, 'asda', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 0, '2021-07-04 10:58:11', '2021-07-04 10:58:11'),
(6, 'asda', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 0, '2021-07-04 10:59:27', '2021-07-04 10:59:27'),
(7, 'asda', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 0, '2021-07-04 11:03:40', '2021-07-04 11:03:40'),
(8, 'asda', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 0, '2021-07-04 11:07:57', '2021-07-04 11:07:57'),
(9, 'asda', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 0, '2021-07-04 11:15:52', '2021-07-04 11:15:52'),
(10, 'asda', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 0, '2021-07-04 11:16:36', '2021-07-04 11:16:36'),
(11, 'asda', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 1, '2021-07-04 11:24:39', '2021-07-10 10:05:39'),
(12, 'asda', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 1, '2021-07-04 11:25:21', '2021-07-10 10:11:49'),
(13, 'asda', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 0, '2021-07-04 11:25:56', '2021-07-04 11:25:56'),
(14, 'asda', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 0, '2021-07-04 11:27:30', '2021-07-04 11:27:30'),
(15, 'asda', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 1, '2021-07-04 11:28:43', '2021-07-10 10:05:38'),
(16, 'asda', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 1, '2021-07-04 11:34:35', '2021-07-10 10:05:37'),
(17, 'asda', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 1, '2021-07-04 11:36:34', '2021-07-10 10:05:36'),
(18, 'asda', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 1, '2021-07-04 11:44:22', '2021-07-10 10:05:36'),
(19, 'muerto', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 1, '2021-07-04 11:51:26', '2021-07-10 10:05:35'),
(20, 'muerto', 'messi', 'calle falsa 123', 'carlosgbozzola@hotmail.com', 1, '2021-07-04 11:58:45', '2021-07-10 10:05:32'),
(21, 'homero', 'simpson', 'calle falsa 123', 'homero@hotmail.com', 0, '2021-07-10 10:49:28', '2021-07-10 11:23:04'),
(22, 'bart', 'simpson', 'calle falsa 123', 'bart@hotmail.com', 0, '2021-07-15 18:43:28', '2021-07-15 18:43:28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `voluntario_imagen`
--

CREATE TABLE `voluntario_imagen` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `id_voluntario` int(11) NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `voluntario_imagen`
--

INSERT INTO `voluntario_imagen` (`id`, `uid`, `id_voluntario`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, '18b32337-c627-4268-86cb-253bc3c79155.jpeg', 11, 1, '2021-07-04 11:24:39', '2021-07-10 10:05:39'),
(2, '5dd8e9c3-d083-4258-b597-fba326975f6a.jpeg', 12, 1, '2021-07-04 11:25:21', '2021-07-10 10:11:50'),
(3, '34dfdcd9-5b7c-4b86-bfb6-b93912aaa4cb.jpeg', 15, 1, '2021-07-04 11:28:43', '2021-07-10 10:05:38'),
(4, 'cfeb98fd-1331-4e23-a21f-17cf52765a77.jpeg', 16, 1, '2021-07-04 11:34:35', '2021-07-10 10:05:37'),
(5, 'c3fc70ad-c081-4a4f-8fef-4feacbb3c7c1.jpeg', 17, 1, '2021-07-04 11:36:34', '2021-07-10 10:05:36'),
(6, '130cfef5-ec9e-44cc-a033-3ea34d4787cb.jpeg', 18, 1, '2021-07-04 11:44:22', '2021-07-10 10:05:36'),
(7, '695d0254-9537-49b4-ac2f-4cc7e5d9c978.jpeg', 19, 1, '2021-07-04 11:51:26', '2021-07-10 10:05:35'),
(8, '55187422-502c-4451-bf3f-bceb99257bfa.jpeg', 20, 1, '2021-07-04 11:58:45', '2021-07-10 10:05:32'),
(9, 'd3c4f933-58b9-4446-aa0f-d13c9d8e62d5.jpeg', 21, 0, '2021-07-10 10:49:28', '2021-07-14 17:42:08'),
(10, '6352adba-a2d0-41bd-ac35-500730c42fa7.jpeg', 22, 0, '2021-07-15 18:43:28', '2021-07-15 18:43:28');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `galgos`
--
ALTER TABLE `galgos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_organizacion` (`id_organizacion`);

--
-- Indices de la tabla `galgos_image`
--
ALTER TABLE `galgos_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_galgo` (`id_galgo`);

--
-- Indices de la tabla `organizacion`
--
ALTER TABLE `organizacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`,`mail`),
  ADD UNIQUE KEY `username_2` (`username`,`mail`);

--
-- Indices de la tabla `voluntario`
--
ALTER TABLE `voluntario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `voluntario_imagen`
--
ALTER TABLE `voluntario_imagen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_empleado` (`id_voluntario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `galgos`
--
ALTER TABLE `galgos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `galgos_image`
--
ALTER TABLE `galgos_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `organizacion`
--
ALTER TABLE `organizacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `voluntario`
--
ALTER TABLE `voluntario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `voluntario_imagen`
--
ALTER TABLE `voluntario_imagen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `galgos`
--
ALTER TABLE `galgos`
  ADD CONSTRAINT `galgos_ibfk_1` FOREIGN KEY (`id_organizacion`) REFERENCES `organizacion` (`id`);

--
-- Filtros para la tabla `galgos_image`
--
ALTER TABLE `galgos_image`
  ADD CONSTRAINT `galgos_image_ibfk_1` FOREIGN KEY (`id_galgo`) REFERENCES `galgos` (`id`);

--
-- Filtros para la tabla `voluntario_imagen`
--
ALTER TABLE `voluntario_imagen`
  ADD CONSTRAINT `voluntario_imagen_ibfk_1` FOREIGN KEY (`id_voluntario`) REFERENCES `voluntario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
