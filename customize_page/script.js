// The file encoding is Windows-1251

/**
 * Copyright (C) 2024 Nikita Tseykovets <tseikovets@rambler.ru>
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

var
	// Title of game page
	title_game = '���� ����������� ���������� ���������',
	// Footer of game page
	footer_game = '�������� �� ���� UrqW.';

document.title = title_game;
document.getElementsByTagName('FOOTER')[0].getElementsByTagName('DIV')[0].getElementsByTagName('P')[0].innerHTML = footer_game;
