// The file encoding is Windows-1251

/**
 * Copyright (C) 2024 Nikita Tseykovets <tseikovets@rambler.ru>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, see <http://www.gnu.org/licenses/>.
 */

var
	// Title of game page
	title_game = 'Свой собственный уникальный заголовок',
	// Footer of game page
	footer_game = 'Работает на базе UrqW.';

document.title = title_game;
document.getElementsByTagName('FOOTER')[0].getElementsByTagName('DIV')[0].getElementsByTagName('P')[0].innerHTML = footer_game;
